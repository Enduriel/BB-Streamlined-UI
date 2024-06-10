CharacterScreenInventoryListModule.prototype.assignItems = function (_entityId, _owner, _items, _itemArray, _itemContainer) {
	this.SUI_destroyItemSlots(_itemArray, _itemContainer, _items.length);
	if (_items.length > 0) {
		this.SUI_createItemSlots(_owner, _items.length, _itemArray, _itemContainer);
		for(var i = 0; i < _items.length; ++i) {
			if(_items[i] !== undefined && _items[i] !== null) {
				this.assignItemToSlot(_entityId, _owner, _itemArray[i], _items[i]);
			} else {
				this.removeItemFromSlot(_itemArray[i])
			}
		}
		this.updateSlotsLabel();
	}
}
