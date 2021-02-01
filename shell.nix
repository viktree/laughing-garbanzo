{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.hello

    pkgs.nodejs-14_x
    pkgs.mongodb

    # keep this line if you use bash
    pkgs.bashInteractive
  ];
}
