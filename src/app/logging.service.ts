export class LoggingService {
    logStatusChanged(status: string) {
        console.log('A server status changed, new accout stats: ' + status)
    }
}