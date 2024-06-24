SUI.Hooks.CharacterScreenInventoryListModule_createItemSlots = CharacterScreenInventoryListModule.prototype.createItemSlots;
CharacterScreenInventoryListModule.prototype.createItemSlots = function (_owner, _size, _itemArray, _itemContainer) {
	var oldCreateItemSlot = this.createItemSlot;
	this.createItemSlot = function (_owner, _index, _parentDiv, _screenDiv) {
		return oldCreateItemSlot.call(this, _owner, _itemArray.length, _parentDiv, _screenDiv)
	}
	var ret = SUI.Hooks.CharacterScreenInventoryListModule_createItemSlots.call(this, _owner, _size, _itemArray, _itemContainer);
	this.createItemSlot = oldCreateItemSlot;
	return ret
}

CharacterScreenInventoryListModule.prototype.SUI_createItemSlots = SUI.Generic.createItemSlots(CharacterScreenInventoryListModule.prototype.createItemSlots);
CharacterScreenInventoryListModule.prototype.SUI_destroyItemSlots = SUI.Generic.destroyItemSlots();
CharacterScreenInventoryListModule.prototype.createDIV = SUI.Generic.createDIV(CharacterScreenInventoryListModule.prototype.createDIV);
CharacterScreenInventoryListModule.prototype.assignItemToSlot = SUI.Generic.assignItemToSlot(CharacterScreenInventoryListModule.prototype.assignItemToSlot);
