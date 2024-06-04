::ModStreamlinedUi <- {
	ID = "mod_streamlined_ui",
	Name = "ModStreamlinedUi",
	Version = "0.0.0"
}
::ModStreamlinedUi.HooksMod <- ::Hooks.register(::ModStreamlinedUi.ID, ::ModStreamlinedUi.Version, ::ModStreamlinedUi.Name);
::ModStreamlinedUi.HooksMod.require("mod_msu");
::ModStreamlinedUi.HooksMod.queue(">mod_msu", function()
{
	::ModStreamlinedUi.Mod <- ::MSU.Class.Mod(::ModStreamlinedUi.ID, ::ModStreamlinedUi.Version, ::ModStreamlinedUi.Name);
});