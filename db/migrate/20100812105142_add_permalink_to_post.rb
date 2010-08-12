class AddPermalinkToPost < ActiveRecord::Migration
  def self.up
    add_column :posts, :permalink, :string
  end

  def self.down
  end
end
