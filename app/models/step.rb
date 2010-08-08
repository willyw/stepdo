class Step < ActiveRecord::Base
  belongs_to :post
  has_many :details
end
