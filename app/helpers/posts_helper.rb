module PostsHelper
  def give_secret_key
    UUIDTools::UUID.timestamp_create.to_s 
  end
end
