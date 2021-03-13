class JobsController < ApplicationController

  def index
    render json: Job.all
  end

  def show
    job = Job.find(params[:id])
    render json: {job: job}
  end

  def create
    job = Job.new(job_params)
    if (job.save)
      render json: { errors: job.errors }, status: 422
    end
  end

  def update
    job = Job.find(params[:id])
    if job.update(job_params)
      render json: job
    else
      render json: { errors: job.errors }, status: 422
    end
  end

  def destroy
    job = Job.find(params[:id]).destroy
  end

  private

  def job_params
    params.require(:job).permit(:name, :company, :hourly_rate)
  end


end
