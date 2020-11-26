require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module AppTest
  class Application < Rails::Application
    config.load_defaults 6.0
    config.hosts << 'e9f29e3c2d6a.ngrok.io' # ここを追加
  end
end
