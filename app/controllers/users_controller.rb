class UsersController < ApplicationController

    def index
        user = User.all
        render json: user, include: :items
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user, include: :items
        else
            render json: "Not found"
        end
    end

    # signup
    def create
        user = User.create(user_params)
        if user
            render json: user, include: :items
        else
            render json: "Not found"
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :first_name, :last_name)
    end
end
