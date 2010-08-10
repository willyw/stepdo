require 'rack/utils'

class FlashSessionCookieMiddleware
  def initialize(app, session_key = '_session_id')
    @app = app
    @session_key = session_key
  end

  def call(env)
      if env['HTTP_USER_AGENT'] =~ /^(Adobe|Shockwave) Flash/
        puts "Here is the env\n"*10
        puts env.inspect 
        req = Rack::Request.new(env)
        puts req.inspect
        puts req.class
        # req.format = :js
        unless req.params[@session_key].nil?
          env['HTTP_COOKIE'] = "#{@session_key}=#{req.params[@session_key]}".freeze
        end
      end

      @app.call(env)
    end
end