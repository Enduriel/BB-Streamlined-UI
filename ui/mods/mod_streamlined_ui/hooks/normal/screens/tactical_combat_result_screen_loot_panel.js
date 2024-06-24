SUI.Hooks.TacticalCombatResultScreenLootPanel_createItemSlots = TacticalCombatResultScreenLootPanel.prototype.createItemSlots;
TacticalCombatResultScreenLootPanel.prototype.createItemSlots = function (_owner, _size, _itemArray, _itemContainer) {
	var oldCreateItemSlot = this.createItemSlot;
	this.createItemSlot = function (_owner, _index, _parentDiv, _screenDiv) {
		return oldCreateItemSlot.call(this, _owner, _itemArray.length, _parentDiv, _screenDiv)
	}
	var ret = SUI.Hooks.TacticalCombatResultScreenLootPanel_createItemSlots.call(this, _owner, _size, _itemArray, _itemContainer);
	this.createItemSlot = oldCreateItemSlot;
	return ret
}

TacticalCombatResultScreenLootPanel.prototype.SUI_createItemSlots = SUI.Generic.createItemSlots(TacticalCombatResultScreenLootPanel.prototype.createItemSlots);
TacticalCombatResultScreenLootPanel.prototype.SUI_destroyItemSlots = SUI.Generic.destroyItemSlots();
TacticalCombatResultScreenLootPanel.prototype.createDIV = SUI.Generic.createDIV(TacticalCombatResultScreenLootPanel.prototype.createDIV);
TacticalCombatResultScreenLootPanel.prototype.assignItemToSlot = SUI.Generic.assignItemToSlot(TacticalCombatResultScreenLootPanel.prototype.assignItemToSlot);

TacticalCombatResultScreenLootPanel.prototype.assignItems = function (_owner, _items, _itemArray, _itemContainer) {
	this.SUI_destroyItemSlots(_itemArray, _itemContainer, _items.length);
	if (_items.length > 0) {
		this.SUI_createItemSlots(_owner, _items.length, _itemArray, _itemContainer);
		for(var i = 0; i < _items.length; ++i) {
			if(_items[i] !== undefined && _items[i] !== null) {
				this.assignItemToSlot(_owner, _itemArray[i], _items[i]);
			} else {
				this.removeItemFromSlot(_itemArray[i])
			}
		}
		if (_owner === TacticalCombatResultScreenIdentifier.ItemOwner.Stash) {
			this.updateStashFreeSlotsLabel();
		}
	}
}
