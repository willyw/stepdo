# Be sure to restart your server when you modify this file

# Specifies gem version of Rails to use when vendor/rails is not present
RAILS_GEM_VERSION = '2.3.8' unless defined? RAILS_GEM_VERSION

# Bootstrap the Rails environment, frameworks, and default configuration
require File.join(File.dirname(__FILE__), 'boot')

Rails::Initializer.run do |config|
  
  
  config.time_zone = 'UTC'

  config.gem 'uuidtools'
  config.gem 'mime-types', :lib => 'mime/types'

  config.gem 'authlogic'


  %w(middleware).each do |dir|
    config.load_paths << "#{RAILS_ROOT}/app/#{dir}"
  end
    
end


ExceptionNotification::Notifier.exception_recipients = %w(w.yunnal@gmail.com)
ExceptionNotification::Notifier.sender_address = %("Application Error" <qtiest.dev@gmail.com>)
ExceptionNotification::Notifier.email_prefix = "[Error::usualGuide] "
