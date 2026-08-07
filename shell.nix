{ pkgs ? import <nixpkgs> { config.allowUnfree = true; } }:

pkgs.mkShell {
	packages = with pkgs; [
		nodejs_22
		steam-run
	];

	shellHook = ''
		# Cloudflare workerd is a glibc binary NixOS cannot run directly.
		echo "ChapelCloud home-site: next dev works via nodejs; use 'steam-run npm run preview' for Workers runtime"
	'';
}
