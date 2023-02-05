class Item < ActiveRecord::Base
    validates :user_id, :description, presence: true
    belongs_to :user
    belongs_to :category
end
