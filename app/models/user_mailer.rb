require 'cgi'
class UserMailer < ActionMailer::Base
  def welcome_email
    recipients    "rajakuraemas@gmail.com"
    from          "[usualGuide]Welcome Notification"
    subject       "Welcome to abnormal userGuide"
    sent_on       Time.now
  end
end

