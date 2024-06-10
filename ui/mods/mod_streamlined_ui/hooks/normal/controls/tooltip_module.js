SUI.Generic.wrapWithCache('bindTooltip', 'sui_tooltip');

SUI.Hooks.$_unbindTooltip = $.fn.unbindTooltip;
$.fn.unbindTooltip = function () {
	var cache = this.data('sui_tooltip');
	if (cache == undefined) {
		return this;
	}
	this.removeData('sui_tooltip');
	return SUI.Hooks.$_unbindTooltip.call(this);
}
