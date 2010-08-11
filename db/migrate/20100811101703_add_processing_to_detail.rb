class AddProcessingToDetail < ActiveRecord::Migration
  def self.up
    add_column :details, :processing, :boolean, :default => true
  end

  def self.down
  end
end
