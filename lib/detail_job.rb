class DetailJob < Struct.new(:detail_id)
  def perform
    Detail.find(self.detail_id).perform
  end
end