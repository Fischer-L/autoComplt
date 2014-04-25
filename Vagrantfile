# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "lucid64"
  config.vm.box_url = "http://files.vagrantup.com/lucid64.box"

  config.vm.network :forwarded_port, guest: 3000, host: 3000
  config.vm.network :forwarded_port, guest: 35729, host: 35729

  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = "chef"

    chef.add_recipe "nodejs"
    chef.add_recipe "nodejs::npm"
    chef.add_recipe "custom"

  end
end
