initSidebarItems({"fn":[["bytes_for","Returns the number of bytes required to hold `bits` bits."],["count_zeros","Returns the number of zero bits in the slice offsetted by `offset` and a length of `length`."],["fmt","Formats `bytes` taking into account an offset and length of the form"],["get_bit","Returns whether bit at position `i` in `data` is set"],["get_bit_unchecked","Returns whether bit at position `i` in `data` is set or not."],["is_set","Returns whether bit at position `i` in `byte` is set or not"],["set","Sets bit at position `i` in `byte`"],["set_bit","Sets bit at position `i` in `data`"],["set_bit_unchecked","Sets bit at position `i` in `data` without doing bound checks"],["zip_validity","Returns an iterator adapter that returns Option according to an optional validity."]],"struct":[["BitChunks","This struct is used to efficiently iterate over bit masks by loading bytes on the stack with alignments of `uX`. This allows efficient iteration over bitmaps."],["BitChunksExact","An iterator over a slice of bytes in [`BitChunk`]s."],["BitChunksExactMut","An iterator over mutable slices of bytes of exact size."],["BitmapIter","An iterator over bits according to the LSB, i.e. the bytes `[4u8, 128u8]` correspond to `[false, false, true, false, ..., true]`."],["SlicesIterator","Iterator over a bitmap that returns slices of set regions This is the most efficient method to extract slices of values from arrays with a validity bitmap. For example, the bitmap `00101111` returns `[(0,4), (6,1)]`"],["ZipValidity","An iterator adapter that converts an iterator over `T` and a validity into an iterator over `Option<T>` based on the validity."]],"trait":[["BitChunk","A chunk of bits. This is used to create masks of a given length whose width is `1` bit. In `portable_simd` notation, this corresponds to `m1xY`."],["BitChunkIterExact","Trait representing an exact iterator over bytes in [`BitChunk`]."]]});