require 'cgi'
class UserMailer < ActionMailer::Base
  def welcome_email
    recipients    "rajakuraemas@gmail.com"
    from          "[usualGuide]Welcome Notification"
    subject       "Welcome to abnormal userGuide"
    sent_on       Time.now
  end
  
  def new_registration( user  )
    recipients    "w.yunnal@gmail.com"
    from          "[usualGuide]New User"
    subject       "New User has registered"
    sent_on       Time.now
    @user = user
  end
  
  
end

