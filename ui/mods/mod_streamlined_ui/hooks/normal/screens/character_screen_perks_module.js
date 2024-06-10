SUI.Hooks.CharacterScreenPerksModule_show = CharacterScreenPerksModule.prototype.show;
CharacterScreenPerksModule.prototype.show = function () {
	SUI.Hooks.CharacterScreenPerksModule_show.call(this);
	if (this.mSuiCache != undefined) {
		this.loadPerkTreesWithBrotherData(this.mSuiCache)
		this.mSuiCache = undefined;
	}
}

SUI.Hooks.CharacterScreenPerksModule_loadPerkTreesWithBrotherData = CharacterScreenPerksModule.prototype.loadPerkTreesWithBrotherData;
CharacterScreenPerksModule.prototype.loadPerkTreesWithBrotherData = function (_dataSource, _brother) {
	if (!this.isVisible()) {
		this.mSuiCache = _dataSource;
		return;
	}
	SUI.Hooks.CharacterScreenPerksModule_loadPerkTreesWithBrotherData.call(this, _dataSource, _brother);
}
