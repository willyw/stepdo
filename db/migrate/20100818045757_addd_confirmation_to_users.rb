class AdddConfirmationToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :confirmed, :boolean, :default => false
  end

  def self.down
  end
end
