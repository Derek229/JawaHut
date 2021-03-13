class DroidsController < ApplicationController
  before_action :set_planet

  def index
    render json: {planet: @planet, droids: @planet.droids}
  end

  def create 
    droid = @planet.droid.new(droid_params)
    if (droid.save)
      render json: droid
    else
      render json: {errors: droid.errors}, status: 422
    end
  end  

  def update
    droid = @planet.droids.find(params[:id])
    if(droid.update(droid_params))
      render json: droid
    else
      render json: {errors: droid.errors}, status: 422
    end
  end


  def destroy
    droid = @planet.droids.find(params[:id])
    render json: droid.destroy
  end

  private 
  def set_planet
    @planet = Planet.find(params[:planet_id])
  end

  def droid_params
    params.require(:droid).permit(:name, :price)
  end
end  