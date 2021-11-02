<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class InviteNotification extends Notification
{
    use Queueable;
    protected $notification_url;

    /**
     * Create a new notification instance.
     * @param $notification_url
     *
     * @return void
     */
    public function __construct($notification_url)
    {
        $this->notification_url = $notification_url;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->greeting('Greatings of Peace and Joy!')
                    ->line('You are invited to take an Exam.')
                    ->line('Please click the button below to accept the invitation')
                    ->action('Accept Invitation', $this->notification_url)
                    ->line('Note: Please copy link below to the browser if Reset Password button is not functioning.')
                    ->line('Thank you!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
