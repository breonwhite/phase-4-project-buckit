class User < ActiveRecord::Base
    has_secure_password
    validates :first_name, :last_name, :email, :password, presence: true
    validates :email, uniqueness: true

    has_many :items
    has_many :categories, through: :items
end
