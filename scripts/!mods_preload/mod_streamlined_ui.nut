::SUI <- {
	ID = "mod_streamlined_ui",
	Name = "Streamlined UI",
	Version = "0.2.0"
}
::SUI.MH <- ::Hooks.register(::SUI.ID, ::SUI.Version, ::SUI.Name);
::SUI.MH.require("mod_modern_hooks >= 0.5.0");
::SUI.MH.conflictWith("mod_stronghold < 2.0.9", "mod_EIMO < 10.0.6");

::SUI.MH.queue(function() {
	::Hooks.registerJS("ui/mods/mod_streamlined_ui/generic_hooks.js")

	foreach (file in ::IO.enumerateFiles("ui/mods/mod_streamlined_ui/hooks/early")) {
		::Hooks.registerJS(file + ".js");
	}
}, ::Hooks.QueueBucket.Early);

::SUI.MH.queue(">mod_dynamic_perks", "<mod_EIMO", function() {
	foreach (file in ::IO.enumerateFiles("ui/mods/mod_streamlined_ui/hooks/normal")) {
		::Hooks.registerJS(file + ".js");
	}
	// ::Hooks.registerJS("ui/mods/mod_streamlined_ui/hooks/perf_testing.js")
})
