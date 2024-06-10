SUI.Hooks.CharacterScreenPaperdollModule_onBrotherSelected = CharacterScreenPaperdollModule.prototype.onBrotherSelected;
CharacterScreenPaperdollModule.prototype.onBrotherSelected = function (_dataSource, _brother) {
	MSU.Utils.Timer("CharacterScreenPaperdollModule.prototype.onBrotherSelected");
	SUI.Hooks.CharacterScreenPaperdollModule_onBrotherSelected.call(this, _dataSource, _brother);
	MSU.Utils.Timer("CharacterScreenPaperdollModule.prototype.onBrotherSelected").stop();
}

SUI.Hooks.CharacterScreenBrothersListModule_onBrotherSelected = CharacterScreenBrothersListModule.prototype.onBrotherSelected;
CharacterScreenBrothersListModule.prototype.onBrotherSelected = function (_dataSource, _brother) {
	MSU.Utils.Timer("CharacterScreenBrothersListModule.prototype.onBrotherSelected");
	SUI.Hooks.CharacterScreenBrothersListModule_onBrotherSelected.call(this, _dataSource, _brother);
	MSU.Utils.Timer("CharacterScreenBrothersListModule.prototype.onBrotherSelected").stop();
}

// CharacterScreenLeftPanelHeaderModule
SUI.Hooks.CharacterScreenLeftPanelHeaderModule_onBrotherSelected = CharacterScreenLeftPanelHeaderModule.prototype.onBrotherSelected;
CharacterScreenLeftPanelHeaderModule.prototype.onBrotherSelected = function (_dataSource, _brother) {
	MSU.Utils.Timer("CharacterScreenLeftPanelHeaderModule.prototype.onBrotherSelected");
	SUI.Hooks.CharacterScreenLeftPanelHeaderModule_onBrotherSelected.call(this, _dataSource, _brother);
	MSU.Utils.Timer("CharacterScreenLeftPanelHeaderModule.prototype.onBrotherSelected").stop();
}

// CharacterScreenSkillsModule
SUI.Hooks.CharacterScreenSkillsModule_onBrotherSelected = CharacterScreenSkillsModule.prototype.onBrotherSelected;
CharacterScreenSkillsModule.prototype.onBrotherSelected = function (_dataSource, _brother) {
	MSU.Utils.Timer("CharacterScreenSkillsModule.prototype.onBrotherSelected");
	SUI.Hooks.CharacterScreenSkillsModule_onBrotherSelected.call(this, _dataSource, _brother);
	MSU.Utils.Timer("CharacterScreenSkillsModule.prototype.onBrotherSelected").stop();
}

// CharacterScreenStatsModule
SUI.Hooks.CharacterScreenStatsModule_onBrotherSelected = CharacterScreenStatsModule.prototype.onBrotherSelected;
CharacterScreenStatsModule.prototype.onBrotherSelected = function (_dataSource, _brother) {
	MSU.Utils.Timer("CharacterScreenStatsModule.prototype.onBrotherSelected");
	SUI.Hooks.CharacterScreenStatsModule_onBrotherSelected.call(this, _dataSource, _brother);
	MSU.Utils.Timer("CharacterScreenStatsModule.prototype.onBrotherSelected").stop();
}

// CharacterScreenInventoryListModule
SUI.Hooks.CharacterScreenInventoryListModule_onBrotherSelected = CharacterScreenInventoryListModule.prototype.onBrotherSelected;
CharacterScreenInventoryListModule.prototype.onBrotherSelected = function (_dataSource, _brother) {
	MSU.Utils.Timer("CharacterScreenInventoryListModule.prototype.onBrotherSelected");
	SUI.Hooks.CharacterScreenInventoryListModule_onBrotherSelected.call(this, _dataSource, _brother);
	MSU.Utils.Timer("CharacterScreenInventoryListModule.prototype.onBrotherSelected").stop();
}

// CharacterScreenPerksModule
SUI.Hooks.CharacterScreenPerksModule_onBrotherSelected = CharacterScreenPerksModule.prototype.onBrotherSelected;
CharacterScreenPerksModule.prototype.onBrotherSelected = function (_dataSource, _brother) {
	MSU.Utils.Timer("CharacterScreenPerksModule.prototype.onBrotherSelected");
	SUI.Hooks.CharacterScreenPerksModule_onBrotherSelected.call(this, _dataSource, _brother);
	MSU.Utils.Timer("CharacterScreenPerksModule.prototype.onBrotherSelected").stop();
}

// CharacterScreenRightPanelHeaderModule
SUI.Hooks.CharacterScreenRightPanelHeaderModule_onBrotherSelected = CharacterScreenRightPanelHeaderModule.prototype.onBrotherSelected;
CharacterScreenRightPanelHeaderModule.prototype.onBrotherSelected = function (_dataSource, _brother) {
	MSU.Utils.Timer("CharacterScreenRightPanelHeaderModule.prototype.onBrotherSelected");
	SUI.Hooks.CharacterScreenRightPanelHeaderModule_onBrotherSelected.call(this, _dataSource, _brother);
	MSU.Utils.Timer("CharacterScreenRightPanelHeaderModule.prototype.onBrotherSelected").stop();
}

SUI.Hooks.TacticalCombatResultScreenLootPanel_assignItems = TacticalCombatResultScreenLootPanel.prototype.assignItems;
TacticalCombatResultScreenLootPanel.prototype.assignItems = function (_owner, _items, _itemArray, _itemContainer) {
	MSU.Utils.Timer("TacticalCombatResultScreenLootPanel.prototype.assignItems");
	SUI.Hooks.TacticalCombatResultScreenLootPanel_assignItems.call(this, _owner, _items, _itemArray, _itemContainer);
	MSU.Utils.Timer("TacticalCombatResultScreenLootPanel.prototype.assignItems").stop();
}

// WorldTownScreenShopDialogModule
SUI.Hooks.WorldTownScreenShopDialogModule_assignItems = WorldTownScreenShopDialogModule.prototype.assignItems;
WorldTownScreenShopDialogModule.prototype.assignItems = function (_owner, _items, _itemArray, _itemContainer) {
	MSU.Utils.Timer("WorldTownScreenShopDialogModule.prototype.assignItems");
	SUI.Hooks.WorldTownScreenShopDialogModule_assignItems.call(this, _owner, _items, _itemArray, _itemContainer);
	MSU.Utils.Timer("WorldTownScreenShopDialogModule.prototype.assignItems").stop();
}

// CharacterScreenInventoryListModule
SUI.Hooks.CharacterScreenInventoryListModule_assignItems = CharacterScreenInventoryListModule.prototype.assignItems;
CharacterScreenInventoryListModule.prototype.assignItems = function (_entityId, _owner, _items, _itemArray, _itemContainer) {
	MSU.Utils.Timer("CharacterScreenInventoryListModule.prototype.assignItems");
	SUI.Hooks.CharacterScreenInventoryListModule_assignItems.call(this, _entityId, _owner, _items, _itemArray, _itemContainer);
	MSU.Utils.Timer("CharacterScreenInventoryListModule.prototype.assignItems").stop();
}
