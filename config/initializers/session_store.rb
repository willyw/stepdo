# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_stepdo_session',
  :secret      => '09d9f2c46b2e55efa24f22ff07fdf7430d7410a9419baa491d36834e19617233cb247ca99871b96578b239fba8af2df6b233fafda4187a858ed334a4e1279987'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
