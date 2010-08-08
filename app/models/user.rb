class User < ActiveRecord::Base
  has_many :posts
  after_create :add_uuid
  
  def add_uuid
    self.uuid = UUIDTools::UUID.timestamp_create.to_s
    self.save
  end
end
