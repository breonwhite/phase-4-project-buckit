class Category < ActiveRecord::Base
    has_and_belongs_to_many :items
    has_and_belongs_to_many :users, :through => :items
    # has_many :items
    
end
