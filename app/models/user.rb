class User < ActiveRecord::Base
    has_many :items
    # has_many :categories, -> { distinct }, through: items
end
