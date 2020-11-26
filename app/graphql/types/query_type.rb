module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
                               description: 'An example field added by the generator'
    def test_field
      'おめでとうございます！カスタムアプリの環境構築が完了しました。
      素敵な開発ライフを応援しています😆'
    end
  end
end
