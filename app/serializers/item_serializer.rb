class ItemSerializer < ActiveModel::Serializer
  attributes :id, :category_id, :description, :user_id

  belongs_to :user
  belongs_to :category
end
