class UsersController < ApplicationController

    # signup
    def create
        user = User.create(user_params)
        #logs the user in 
        if user.valid?
            session[:user_id] = user.id
            render json: user, include: :items
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    # me (get current user)
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, include: :items
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end


    private

    def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :password, :password_confirmation)
    end
end
