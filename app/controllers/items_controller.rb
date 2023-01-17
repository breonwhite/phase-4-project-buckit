class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: items
    end

    def show
        item = Item.find(params[:id])
        if item
            render json: item
        else
            render json: "Not found"
        end
    end

    def create
        item = Item.create(item_params)
        if item
            render json: item
        else
            render json: "Not found"
        end
    end

    private

    def item_params
        params.require(:item).permit(:user_id, :category_id, :description)
    end


end