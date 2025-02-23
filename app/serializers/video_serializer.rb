class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :video_url, :thumbnail_url
end
