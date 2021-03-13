class PlanetsController < ApplicationController
  def index
    render json: Planet.all
  end

  def show
    planet = Planet.find(params[:id])
    render json: {planet: planet, droids:planet.droids}
  end

  def create
    planet = Planet.new(planet_params)
    if(planet.save)
      render json: planet
    else 
      render json: {errors: planet.errors}, status: 422
    end
  end

  def update
    planet = Planet.find(params[:id])
    if(planet.update(planet_params))
      render json: planet
    else
      render json: {errors: planet.errors}, status: 422
    end
  end


  def destroy
    render json: Planet.find(params[:id]).destroy
  end


  private

  def planet_params
    params.require(:planet).permit(:name)
  end
end