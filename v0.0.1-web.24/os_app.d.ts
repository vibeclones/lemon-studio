/* tslint:disable */
/* eslint-disable */

/**
 * Format that each sample has. Usually, this corresponds to the sampling
 * depth of the audio source. For example, 16 bit quantized samples can be
 * encoded in `i16` or `u16`. Note that the quantized sampling depth is not
 * directly visible for formats where [`is_float`] is true.
 *
 * Also note that the backend must support the encoding of the quantized
 * samples in the given format, as there is no generic transformation from one
 * format into the other done inside the frontend-library code. You can query
 * the supported formats by using [`supported_input_configs`].
 *
 * A good rule of thumb is to use [`SampleFormat::I16`] as this covers typical
 * music (WAV, MP3) as well as typical audio input devices on most platforms,
 *
 * [`is_float`]: SampleFormat::is_float
 * [`supported_input_configs`]: crate::traits::DeviceTrait::supported_input_configs
 */
export enum SampleFormat {
    /**
     * `i8` with a valid range of `i8::MIN..=i8::MAX` with `0` being the origin.
     */
    I8 = 0,
    /**
     * `i16` with a valid range of `i16::MIN..=i16::MAX` with `0` being the origin.
     */
    I16 = 1,
    /**
     * `I24` with a valid range of `-(1 << 23)..=((1 << 23) - 1)` with `0` being the origin.
     *
     * This format uses 4 bytes of storage but only 24 bits are significant.
     */
    I24 = 2,
    /**
     * `i32` with a valid range of `i32::MIN..=i32::MAX` with `0` being the origin.
     */
    I32 = 3,
    /**
     * `i64` with a valid range of `i64::MIN..=i64::MAX` with `0` being the origin.
     */
    I64 = 4,
    /**
     * `u8` with a valid range of `u8::MIN..=u8::MAX` with `1 << 7 == 128` being the origin.
     */
    U8 = 5,
    /**
     * `u16` with a valid range of `u16::MIN..=u16::MAX` with `1 << 15 == 32768` being the origin.
     */
    U16 = 6,
    /**
     * `U24` with a valid range of `0..=((1 << 24) - 1)` with `1 << 23 == 8388608` being the origin.
     *
     * This format uses 4 bytes of storage but only 24 bits are significant.
     */
    U24 = 7,
    /**
     * `u32` with a valid range of `u32::MIN..=u32::MAX` with `1 << 31` being the origin.
     */
    U32 = 8,
    /**
     * `U48` with a valid range of '0..(1 << 48)' with `1 << 47` being the origin
     * `u64` with a valid range of `u64::MIN..=u64::MAX` with `1 << 63` being the origin.
     */
    U64 = 9,
    /**
     * `f32` with a valid range of `-1.0..=1.0` with `0.0` being the origin.
     */
    F32 = 10,
    /**
     * `f64` with a valid range of `-1.0..=1.0` with `0.0` being the origin.
     */
    F64 = 11,
    /**
     * DSD 1-bit stream in u8 container (8 bits = 8 DSD samples) with 0x69 being the silence byte pattern.
     */
    DsdU8 = 12,
    /**
     * DSD 1-bit stream in u16 container (16 bits = 16 DSD samples) with 0x69 being the silence byte pattern.
     */
    DsdU16 = 13,
    /**
     * DSD 1-bit stream in u32 container (32 bits = 32 DSD samples) with 0x69 being the silence byte pattern.
     */
    DsdU32 = 14,
}

/**
 * The set of parameters used to describe how to open a stream.
 *
 * The sample format is omitted in favour of using a sample type.
 *
 * See also [`BufferSize`] for details on buffer size behavior and latency considerations.
 */
export class StreamConfig {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    get buffer_size(): number | undefined;
    set buffer_size(value: number | null | undefined);
    channels: number;
    sample_rate: number;
}

/**
 * WasmAudioProcessor provides an interface for the JavaScript code
 * running in the AudioWorklet to interact with Rust.
 */
export class WasmAudioProcessor {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Converts this `WasmAudioProcessor` into a raw pointer (as `usize`) for FFI use.
     *
     * Transfers ownership of the processor to the caller. The returned pointer must be passed to
     * [`unpack`] exactly once. Failing to call [`unpack`] will leak the allocation.
     *
     * [`unpack`]: Self::unpack
     */
    pack(): number;
    process(channels: number, frame_size: number, sample_rate: number, current_time: number): number;
    /**
     * # Safety
     *
     * The `val` parameter must be a value previously returned by `Self::pack`.
     * It must not have already been unpacked or deallocated, and must not be used after this call.
     * Using an invalid or already-consumed pointer will result in undefined behavior.
     */
    static unpack(val: number): WasmAudioProcessor;
}

export function start(): Promise<void>;

/**
 * Entry point for web workers
 */
export function wasm_thread_entry_point(ptr: number): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly __wbg_get_streamconfig_buffer_size: (a: number) => number;
    readonly __wbg_get_streamconfig_channels: (a: number) => number;
    readonly __wbg_get_streamconfig_sample_rate: (a: number) => number;
    readonly __wbg_set_streamconfig_buffer_size: (a: number, b: number) => void;
    readonly __wbg_set_streamconfig_channels: (a: number, b: number) => void;
    readonly __wbg_set_streamconfig_sample_rate: (a: number, b: number) => void;
    readonly __wbg_streamconfig_free: (a: number, b: number) => void;
    readonly __wbg_wasmaudioprocessor_free: (a: number, b: number) => void;
    readonly start: () => any;
    readonly wasm_thread_entry_point: (a: number) => void;
    readonly wasmaudioprocessor_pack: (a: number) => number;
    readonly wasmaudioprocessor_process: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly lemon_cpp_alloc: (a: number) => number;
    readonly lemon_cpp_free: (a: number) => void;
    readonly lemon_stretch_seed: () => number;
    readonly wasmaudioprocessor_unpack: (a: number) => number;
    readonly wasm_bindgen__convert__closures_____invoke__h305532784984eede: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h4c193e3b19ece790: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h76b786818711b790: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hf3edde9170921e5c: (a: number, b: number, c: number, d: number, e: number, f: number, g: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__hcae4f4cffb96c47e: (a: number, b: number, c: any, d: any, e: any) => [number, number, number];
    readonly wasm_bindgen__convert__closures_____invoke__haa05115dde12a251: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h85554ae813fac7c3: (a: number, b: number, c: any, d: any) => any;
    readonly wasm_bindgen__convert__closures_____invoke__h0ec7542d9cac1eeb: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h30e7c9180e480616: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h48c34413d7227539: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h48c34413d7227539_12: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h48c34413d7227539_13: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h4a3f0a4aae7951a3: (a: number, b: number, c: any) => [number, number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h7e028bd9c2a8e9cd: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures________invoke__hcbd9213feb9d514e: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0c372b98dc06b97e: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h32ff67a2b3e8956d: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h32ff67a2b3e8956d_22: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h32ff67a2b3e8956d_23: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h32ff67a2b3e8956d_24: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h32ff67a2b3e8956d_25: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h32ff67a2b3e8956d_27: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h32ff67a2b3e8956d_28: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h32ff67a2b3e8956d_31: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h35c0f06f6513992c: (a: number, b: number) => [number, number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h35c0f06f6513992c_41: (a: number, b: number) => [number, number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h35c0f06f6513992c_42: (a: number, b: number) => [number, number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h943253be6d2e6c64: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h9fcb3dec142e80a1: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hdbc584162674aa49: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h021a13194f84856a: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h4352f6a8148c0ccf: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hecc301fa5762b68b: (a: number, b: number) => void;
    readonly memory: WebAssembly.Memory;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_thread_destroy: (a?: number, b?: number, c?: number) => void;
    readonly __wbindgen_start: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput, memory?: WebAssembly.Memory, thread_stack_size?: number }} module - Passing `SyncInitInput` directly is deprecated.
 * @param {WebAssembly.Memory} memory - Deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput, memory?: WebAssembly.Memory, thread_stack_size?: number } | SyncInitInput, memory?: WebAssembly.Memory): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput>, memory?: WebAssembly.Memory, thread_stack_size?: number }} module_or_path - Passing `InitInput` directly is deprecated.
 * @param {WebAssembly.Memory} memory - Deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput>, memory?: WebAssembly.Memory, thread_stack_size?: number } | InitInput | Promise<InitInput>, memory?: WebAssembly.Memory): Promise<InitOutput>;
