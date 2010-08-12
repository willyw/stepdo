class AddModToUserAuth < ActiveRecord::Migration
  def self.up
    add_column :users, :crypted_password, :string, :null => false
    add_column :users, :password_salt, :string, :null => false
    add_column :users, :persistence_token, :string, :null => false
  end

  def self.down
  end
end
