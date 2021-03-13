class Planet < ApplicationRecord

  has_many :droids, dependent: :destroy
  
end
