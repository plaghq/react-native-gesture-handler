import { State } from '../../State';
import { Config, AdaptedEvent, PointerType } from '../interfaces';
import EventManager from '../tools/EventManager';
import PointerTracker from '../tools/PointerTracker';
import { GestureHandlerDelegate } from '../tools/GestureHandlerDelegate';
export default abstract class GestureHandler {
    private lastSentState;
    protected currentState: State;
    protected shouldCancellWhenOutside: boolean;
    protected hasCustomActivationCriteria: boolean;
    protected enabled: boolean;
    private viewRef;
    private propsRef;
    private handlerTag;
    protected config: Config;
    protected tracker: PointerTracker;
    protected activationIndex: number;
    protected awaiting: boolean;
    protected active: boolean;
    protected shouldResetProgress: boolean;
    protected pointerType: PointerType;
    protected delegate: GestureHandlerDelegate<unknown>;
    constructor(delegate: GestureHandlerDelegate<unknown>);
    protected init(viewRef: number, propsRef: React.RefObject<unknown>): void;
    attachEventManager(manager: EventManager<unknown>): void;
    protected onCancel(): void;
    protected onReset(): void;
    protected resetProgress(): void;
    reset(): void;
    moveToState(newState: State, sendIfDisabled?: boolean): void;
    protected onStateChange(_newState: State, _oldState: State): void;
    begin(): void;
    /**
     * @param {boolean} sendIfDisabled - Used when handler becomes disabled. With this flag orchestrator will be forced to send fail event
     */
    fail(sendIfDisabled?: boolean): void;
    /**
     * @param {boolean} sendIfDisabled - Used when handler becomes disabled. With this flag orchestrator will be forced to send cancel event
     */
    cancel(sendIfDisabled?: boolean): void;
    activate(_force?: boolean): void;
    end(): void;
    isAwaiting(): boolean;
    setAwaiting(value: boolean): void;
    isActive(): boolean;
    setActive(value: boolean): void;
    getShouldResetProgress(): boolean;
    setShouldResetProgress(value: boolean): void;
    getActivationIndex(): number;
    setActivationIndex(value: number): void;
    shouldWaitForHandlerFailure(handler: GestureHandler): boolean;
    shouldRequireToWaitForFailure(handler: GestureHandler): boolean;
    shouldRecognizeSimultaneously(handler: GestureHandler): boolean;
    shouldBeCancelledByOther(handler: GestureHandler): boolean;
    protected onPointerDown(event: AdaptedEvent, _sourceEvent?: TouchEvent | PointerEvent): void;
    protected onPointerAdd(event: AdaptedEvent, _sourceEvent?: TouchEvent | PointerEvent): void;
    protected onPointerUp(event: AdaptedEvent, _sourceEvent?: TouchEvent | PointerEvent): void;
    protected onPointerRemove(event: AdaptedEvent, _sourceEvent?: TouchEvent | PointerEvent): void;
    protected onPointerMove(event: AdaptedEvent, _sourceEvent?: TouchEvent | PointerEvent): void;
    protected onPointerLeave(event: AdaptedEvent, _sourceEvent?: TouchEvent | PointerEvent): void;
    protected onPointerEnter(event: AdaptedEvent, _sourceEvent?: TouchEvent | PointerEvent): void;
    protected onPointerCancel(event: AdaptedEvent, _sourceEvent?: TouchEvent | PointerEvent): void;
    protected onPointerOutOfBounds(event: AdaptedEvent, _sourceEvent?: TouchEvent | PointerEvent): void;
    protected onPointerMoveOver(_event: AdaptedEvent, _sourceEvent?: TouchEvent | PointerEvent): void;
    protected onPointerMoveOut(_event: AdaptedEvent, _sourceEvent?: TouchEvent | PointerEvent): void;
    private tryToSendMoveEvent;
    sendTouchEvent(event: AdaptedEvent): void;
    sendEvent: (newState: State, oldState: State) => void;
    private transformEventData;
    private transformTouchEvent;
    private cancelTouches;
    protected transformNativeEvent(): Record<string, unknown>;
    updateGestureConfig({ enabled, ...props }: Config): void;
    protected checkCustomActivationCriteria(criterias: string[]): void;
    private validateHitSlops;
    private checkHitSlop;
    protected resetConfig(): void;
    getTag(): number;
    setTag(tag: number): void;
    getConfig(): Config;
    getDelegate(): GestureHandlerDelegate<unknown>;
    getTracker(): PointerTracker;
    getTrackedPointersID(): number[];
    getState(): State;
    isEnabled(): boolean;
    private isFinished;
    protected setShouldCancelWhenOutside(shouldCancel: boolean): void;
    protected getShouldCancelWhenOutside(): boolean;
    getPointerType(): PointerType;
}
