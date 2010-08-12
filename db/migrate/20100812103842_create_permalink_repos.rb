class CreatePermalinkRepos < ActiveRecord::Migration
  def self.up
    create_table :permalink_repos do |t|
      t.integer :post_id
      t.string :permalink
      
      t.timestamps
    end
  end

  def self.down
    drop_table :permalink_repos
  end
end
