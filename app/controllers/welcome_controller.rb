class WelcomeController < ApplicationController
  def index
     @user = User.new
     @user_session = UserSession.new
  end
end
