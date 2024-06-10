WorldTownScreenShopDialogModule.prototype.SUI_createItemSlots = SUI.Generic.createItemSlots(WorldTownScreenShopDialogModule.prototype.createItemSlots);
WorldTownScreenShopDialogModule.prototype.SUI_destroyItemSlots = SUI.Generic.destroyItemSlots();
WorldTownScreenShopDialogModule.prototype.createDIV = SUI.Generic.createDIV(WorldTownScreenShopDialogModule.prototype.createDIV);
WorldTownScreenShopDialogModule.prototype.assignItemToSlot = SUI.Generic.assignItemToSlot(WorldTownScreenShopDialogModule.prototype.assignItemToSlot);

WorldTownScreenShopDialogModule.prototype.assignItems = function (_owner, _items, _itemArray, _itemContainer) {
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
		this.updateItemPriceLabels(_itemArray, _items, _owner === WorldTownScreenShop.ItemOwner.Stash);
		if (_owner === WorldTownScreenShop.ItemOwner.Stash) {
			this.updateStashFreeSlotsLabel();
		}
	}
};

// WorldTownScreenShopDialogModule.prototype.removeItemFromSlot = function(_slot)
// {
// 	console.error('removeItemFromSlot', _slot);
// 	console.error(queryStackTrace());
//     // remove item image
// 	_slot.assignListItemImage();
//     _slot.assignListItemOverlayImage();
// 	_slot.assignListItemTooltip();
// };
