class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: items, include: :category
    end

    def show
        item = Item.find(params[:id])
        if item
            render json: item, include: :category
        else
            render json: "Not found"
        end
    end

    def create
        item = Item.create(item_params)
        if item
            render json: item, include: :category
        else
            render json: "Not found"
        end
    end

    def update
        item = Item.find_by(id: params[:id])
        item.update(item_params)
        if item
            render json: item, include: :category
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

    def item_params
        params.require(:item).permit(:user_id, :category_id, :description)
    end


end