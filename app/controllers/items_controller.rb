class ItemsController < ApplicationController
    before_action :authorize

    def index
        items = current_user.items
        render json: items
    end

    def show
        item = current_user.items.find_by(id: params[:id])
        if item
            render json: item
        else
            render json: { error: "Not Found" }, status: :unauthorized
        end
    end

    def create
        item = current_user.items.create(item_params)
        if item.valid?
            render json: item
        else
            render json: { errors: item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        item = current_user.items.find_by(id: params[:id])
        item.update(item_params)
        if item
            render json: item
        else
            render json: "Could not update"
        end
    end

    def destroy
        item = Item.find_by(id: params[:id])
        if item
            item.destroy
        else
            render json: "Not found"
        end   
    end 

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def item_params
        params.permit(:description, :category_id)
    end

    def authorize
        return render json: { error: "Not Autorized" }, status: :unauthorized unless session.include? :user_id
    end


end