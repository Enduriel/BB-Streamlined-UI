var SUI = {
	ID : "mod_streamlined_ui",
	Hooks : {},
	Generic : {},
	__Chars : "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	__NextId : [0],
	CacheHits : 0,
	CacheTotal : 0,
	BarHits : 0,
	BarPartials: 0,
	BarTotal : 0,
}

// from https://stackoverflow.com/a/12504061/13567461
SUI.__incrementId = function() {
	for (var i = 0; i < this.__NextId.length; i++) {
		var val = ++this.__NextId[i];
		if (val >= this.__Chars.length) {
			this.__NextId[i] = 0;
		} else {
			return;
		}
	}
	this.__NextId.push(0);
}

SUI.getNextId = function() {
	var r = [];
	for (var i = 0; i < this.__NextId.length; i++) {
		r.unshift(this.__Chars[this.__NextId[i]]);
	}
	this.__incrementId();
	return r.join('');
}

// based on https://github.com/epoberezkin/fast-deep-equal
SUI.__deepEq = function(a, b) {
	if (a === b) {
		return true;
	}

	if (a && b && typeof a == 'object' && typeof b == 'object') {
		if (a.constructor !== b.constructor) {
			return false;
		};
		var length, i, keys;
		if (Array.isArray(a)) {
			length = a.length;
			if (length != b.length) {
				return false;
			};
			for (i = length; i-- !== 0;){
				if (!SUI.__deepEq(a[i], b[i])) {
					return false;
				}
			}
			return true;
		}
		if (a.constructor === RegExp) {
			return a.source === b.source && a.flags === b.flags;
		}
		if (a.valueOf !== Object.prototype.valueOf) {
			return a.valueOf() === b.valueOf();
		}
		if (a.toString !== Object.prototype.toString) {
			return a.toString() === b.toString();
		}
		keys = Object.keys(a);
		length = keys.length;
		if (length !== Object.keys(b).length) {
			return false;
		}
		for (i = length; i-- !== 0;){
			if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
				return false;
			}
		}
		for (i = length; i-- !== 0;) {
			var key = keys[i];
			if (!SUI.__deepEq(a[key], b[key])) {
				return false;
			}
		}
		return true;
	}
	return a!==a && b!==b;
}

SUI.__wrapWithCache = function(_fnData, _cacheName) {
	SUI.Hooks['$_' + _fnData.name] = $.fn[_fnData.name];
	$.fn[_fnData.name] = function() {
		var cache = this.data(_cacheName);
		if (cache == undefined) {
			cache = {};
		}
		var allMatch = true;
		for (var i = 0; i < _fnData.params.length; ++i) {
			if (!SUI.__deepEq(arguments[i], cache[_fnData.params[i]])) {
				allMatch = false;
				cache[_fnData.params[i]] = arguments[i];
			}
		}
		SUI.CacheTotal++;
		if (allMatch) {
			SUI.CacheHits++;
			return this;
		}

		this.data(_cacheName, cache);
		return SUI.Hooks['$_' + _fnData.name].apply(this, arguments);
	}
}

SUI.Generic.__wrapProgressBarWidth = function(_fnData) {
	SUI.Hooks['$_' + _fnData.name] = $.fn[_fnData.name];
	$.fn[_fnData.name] = function(_value, _valueMax, _withoutAnimation) {
		var cache = this.data('sui');
		if (cache == undefined) {
			cache = {};
		}
		var oldValue = cache[_fnData.params[0]];
		var oldValueMax = cache[_fnData.params[1]];
		var allMatch = true;
		for (var i = 0; i < _fnData.params.length; ++i) {
			if (cache[_fnData.params[i]] != arguments[i]) {
				allMatch = false;
				cache[_fnData.params[i]] = arguments[i];
			}
		}
		SUI.BarTotal++;
		if (allMatch) {
			SUI.BarHits++;
			return this;
		} else if (typeof(oldValue) === 'number' && typeof(oldValue) === 'number' && oldValueMax > 0 &&
			typeof(_value) === 'number' && typeof(_value) === 'number' && _valueMax > 0 &&
			oldValue / oldValueMax === _value / _valueMax) {
			SUI.BarPartials++;
			return this;
		}

		this.data('sui', cache);
		SUI.Hooks['$_' + _fnData.name].call(this, _value, _valueMax, _withoutAnimation);
		return this;
	};
};

SUI.Generic.wrapWithCache = function( _name, _cacheName, _wrapper ) {
	if (_cacheName == undefined) {
		_cacheName = 'sui';
	}
	if (_wrapper == undefined) {
		_wrapper = SUI.__wrapWithCache;
	}
	var fn = $.fn[_name];
	var params = [];
	for (var i = 0; i < fn.length; ++i) {
		params.push(SUI.getNextId());
	}
	_wrapper({
		name: _name,
		params: params
	}, _cacheName);
}

SUI.Generic.destroyItemSlots = function() {
	return function(_itemArray, _itemContainer, _newSize) {
		var entries = _itemContainer.find('.ui-control.item');
		if (entries.length <= _newSize) {
			return;
		}
		var expr = '.ui-control.item:nth-last-child(-n+' + (entries.length - _newSize) + ')';
		var slots = _itemContainer.find(expr).detach();
		_itemArray.length = _newSize;
		if (this.mSUI.spareItemSlots == null) {
			this.mSUI.spareItemSlots = slots;
		} else {
			this.mSUI.spareItemSlots = this.mSUI.spareItemSlots.add(slots);
		}
	}
}

SUI.Generic.createItemSlots = function(_original) {
	return function(_owner, _newSize, _itemArray, _itemContainer, _screenDiv) {
		var entries = _itemContainer.find('.ui-control.item');
		if (entries.length >= _newSize) {
			return
		}
		var numMissing = _newSize - entries.length;
		if (this.mSUI.spareItemSlots != null) {
			var numToPop = Math.min(numMissing, this.mSUI.spareItemSlots.length);
			var slots = this.mSUI.spareItemSlots.splice(0, numToPop);
			for (var i = 0; i < numToPop; ++i) {
				var index = entries.length + i;
				var slot = $(slots.pop());
				slot.attr('id', 'slot-index_' + index);
				var itemData = slot.data('item') || {};
				itemData.index = index;
				itemData.owner = _owner;
				slot.data('item', itemData);
				_itemContainer.append(slot);
				_itemArray.push(slot);
			}
			numMissing -= numToPop;
		}
		_original.call(this, _owner, numMissing, _itemArray, _itemContainer);
	}
}

SUI.Generic.createDIV = function(_original) {
	return function(_parentDiv) {
		this.mSUI = {
			spareItemSlots : null,
		};
		_original.call(this, _parentDiv);
	}
}

SUI.Generic.assignItemToSlot = function(_original) {
	return function( _arg1, _arg2, _arg3, _arg4 ) {
		var slot, item;
		if (_arg4 == undefined) {
			slot = _arg2;
			item = _arg3;
		} else {
			slot = _arg3;
			item = _arg4;
		}
		_original.call(this, _arg1, _arg2, _arg3, _arg4);
		if(('id' in item) && ('imagePath' in item)) {
			if (item.showAmount !== true || item.amount == '') {
				slot.assignListItemAmount()
			}
		}
	};
}
