class User < ActiveRecord::Base
  has_many :posts
  after_create :add_uuid
  
  acts_as_authentic do |c|
    # Email config
    c.merge_validates_format_of_email_field_options :message => "Hey, your email doesn't look like an email, e.g.: guider@usualguide.com"
    c.merge_validates_uniqueness_of_email_field_options :message => "Someone has registered with this email address"
    c.merge_validates_length_of_email_field_options :within => 1..100
    # Password config
    c.merge_validates_length_of_password_field_options :message =>"Hey, to be secure, the password length has to be more than 6 characters."
    c.merge_validates_confirmation_of_password_field_options :message => "The password doesn't match the password confirmation"
  end
  
  def add_uuid
    self.uuid = UUIDTools::UUID.timestamp_create.to_s
    self.save
  end
end
