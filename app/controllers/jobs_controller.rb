class JobsController < ApplicationController
  before_action :set_jobs, only: [:index]
  before_action :set_job, only: [:show]
  
  def index
    render json: @jobs
  end

  def show
   render json: @job
  end

  def create
    job = Job.new(job_params)
    if (job.save)
      render json: job
    else
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
  def set_jobs
    @jobs = Job.all
  end

  def set_job
    @job = Job.find(params[:id])
  end

  def job_params
    params.require(:job).permit(:name, :company, :hourly_rate)
  end


end
