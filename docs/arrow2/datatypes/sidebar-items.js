initSidebarItems({"enum":[["DataType","The set of datatypes that are supported by this implementation of Apache Arrow."],["DictionaryIndexType","the set of valid indices used to index a dictionary-encoded Array."],["IntervalUnit","YEAR_MONTH or DAY_TIME interval in SQL style."],["PhysicalType","The set of physical types: unique in-memory representations of an Arrow array. A physical type has a one-to-many relationship with a [`crate::datatypes::DataType`] and a one-to-one mapping with each struct in this crate that implements [`crate::array::Array`]."],["PrimitiveType",""],["TimeUnit","An absolute length of time in seconds, milliseconds, microseconds or nanoseconds."]],"struct":[["Field","A logical [`DataType`] and its associated metadata per Arrow specification"],["Schema","An ordered sequence of [`Field`] with optional metadata."]],"type":[["SchemaRef","typedef for [`Arc<Schema>`]."]]});