(function() {var implementors = {};
implementors["arrow2"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/chunk/struct.Chunk.html\" title=\"struct arrow2::chunk::Chunk\">Chunk</a>&lt;A&gt;","synthetic":false,"types":["arrow2::chunk::Chunk"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.PrimitiveScalar.html\" title=\"struct arrow2::scalar::PrimitiveScalar\">PrimitiveScalar</a>&lt;T&gt;","synthetic":false,"types":["arrow2::scalar::primitive::PrimitiveScalar"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.Utf8Scalar.html\" title=\"struct arrow2::scalar::Utf8Scalar\">Utf8Scalar</a>&lt;O&gt;","synthetic":false,"types":["arrow2::scalar::utf8::Utf8Scalar"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.BinaryScalar.html\" title=\"struct arrow2::scalar::BinaryScalar\">BinaryScalar</a>&lt;O&gt;","synthetic":false,"types":["arrow2::scalar::binary::BinaryScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.BooleanScalar.html\" title=\"struct arrow2::scalar::BooleanScalar\">BooleanScalar</a>","synthetic":false,"types":["arrow2::scalar::boolean::BooleanScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.NullScalar.html\" title=\"struct arrow2::scalar::NullScalar\">NullScalar</a>","synthetic":false,"types":["arrow2::scalar::null::NullScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.FixedSizeBinaryScalar.html\" title=\"struct arrow2::scalar::FixedSizeBinaryScalar\">FixedSizeBinaryScalar</a>","synthetic":false,"types":["arrow2::scalar::fixed_size_binary::FixedSizeBinaryScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.UnionScalar.html\" title=\"struct arrow2::scalar::UnionScalar\">UnionScalar</a>","synthetic":false,"types":["arrow2::scalar::union::UnionScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/types/struct.days_ms.html\" title=\"struct arrow2::types::days_ms\">days_ms</a>","synthetic":false,"types":["arrow2::types::native::days_ms"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/types/struct.months_days_ns.html\" title=\"struct arrow2::types::months_days_ns\">months_days_ns</a>","synthetic":false,"types":["arrow2::types::native::months_days_ns"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"arrow2/types/enum.PrimitiveType.html\" title=\"enum arrow2::types::PrimitiveType\">PrimitiveType</a>","synthetic":false,"types":["arrow2::types::PrimitiveType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/io/csv/write/struct.SerializeOptions.html\" title=\"struct arrow2::io::csv::write::SerializeOptions\">SerializeOptions</a>","synthetic":false,"types":["arrow2::io::csv::write::serialize::SerializeOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"arrow2/io/ipc/write/enum.Compression.html\" title=\"enum arrow2::io::ipc::write::Compression\">Compression</a>","synthetic":false,"types":["arrow2::io::ipc::write::common::Compression"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/io/ipc/write/stream_async/struct.WriteOptions.html\" title=\"struct arrow2::io::ipc::write::stream_async::WriteOptions\">WriteOptions</a>","synthetic":false,"types":["arrow2::io::ipc::write::common::WriteOptions"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/io/ipc/write/struct.Record.html\" title=\"struct arrow2::io::ipc::write::Record\">Record</a>&lt;'a&gt;","synthetic":false,"types":["arrow2::io::ipc::write::common::Record"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/io/ipc/struct.IpcField.html\" title=\"struct arrow2::io::ipc::IpcField\">IpcField</a>","synthetic":false,"types":["arrow2::io::ipc::IpcField"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/io/ipc/struct.IpcSchema.html\" title=\"struct arrow2::io::ipc::IpcSchema\">IpcSchema</a>","synthetic":false,"types":["arrow2::io::ipc::IpcSchema"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/io/parquet/read/struct.ColumnIndex.html\" title=\"struct arrow2::io::parquet::read::ColumnIndex\">ColumnIndex</a>","synthetic":false,"types":["arrow2::io::parquet::read::indexes::ColumnIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"arrow2/io/parquet/read/statistics/enum.Count.html\" title=\"enum arrow2::io::parquet::read::statistics::Count\">Count</a>","synthetic":false,"types":["arrow2::io::parquet::read::statistics::Count"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/io/parquet/read/statistics/struct.Statistics.html\" title=\"struct arrow2::io::parquet::read::statistics::Statistics\">Statistics</a>","synthetic":false,"types":["arrow2::io::parquet::read::statistics::Statistics"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"arrow2/io/parquet/write/enum.Nested.html\" title=\"enum arrow2::io::parquet::write::Nested\">Nested</a>&lt;'a&gt;","synthetic":false,"types":["arrow2::io::parquet::write::pages::Nested"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/io/parquet/write/struct.WriteOptions.html\" title=\"struct arrow2::io::parquet::write::WriteOptions\">WriteOptions</a>","synthetic":false,"types":["arrow2::io::parquet::write::WriteOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"arrow2/io/avro/enum.Compression.html\" title=\"enum arrow2::io::avro::Compression\">Compression</a>","synthetic":false,"types":["arrow2::io::avro::Compression"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/io/avro/struct.CompressedBlock.html\" title=\"struct arrow2::io::avro::CompressedBlock\">CompressedBlock</a>","synthetic":false,"types":["arrow2::io::avro::CompressedBlock"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/io/avro/struct.Block.html\" title=\"struct arrow2::io::avro::Block\">Block</a>","synthetic":false,"types":["arrow2::io::avro::Block"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/datatypes/struct.Field.html\" title=\"struct arrow2::datatypes::Field\">Field</a>","synthetic":false,"types":["arrow2::datatypes::field::Field"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.PhysicalType.html\" title=\"enum arrow2::datatypes::PhysicalType\">PhysicalType</a>","synthetic":false,"types":["arrow2::datatypes::physical_type::PhysicalType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.IntegerType.html\" title=\"enum arrow2::datatypes::IntegerType\">IntegerType</a>","synthetic":false,"types":["arrow2::datatypes::physical_type::IntegerType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"arrow2/datatypes/struct.Schema.html\" title=\"struct arrow2::datatypes::Schema\">Schema</a>","synthetic":false,"types":["arrow2::datatypes::schema::Schema"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.DataType.html\" title=\"enum arrow2::datatypes::DataType\">DataType</a>","synthetic":false,"types":["arrow2::datatypes::DataType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.UnionMode.html\" title=\"enum arrow2::datatypes::UnionMode\">UnionMode</a>","synthetic":false,"types":["arrow2::datatypes::UnionMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.TimeUnit.html\" title=\"enum arrow2::datatypes::TimeUnit\">TimeUnit</a>","synthetic":false,"types":["arrow2::datatypes::TimeUnit"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.IntervalUnit.html\" title=\"enum arrow2::datatypes::IntervalUnit\">IntervalUnit</a>","synthetic":false,"types":["arrow2::datatypes::IntervalUnit"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()