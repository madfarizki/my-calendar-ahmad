import { useState } from "react";
import { Button } from "@/components/index";
import { ButtonVariant } from "@/components/ui/Button";

import {
  Container,
  ModalContent,
  CloseButton,
  Title,
  Form,
  Item,
  Label,
  Span,
  Input,
  ButtonWrapper,
} from "./event-form.styles";

type EventFormProps = {
  date: string;
  event?: Event | null;
  isOpen: boolean;
  onCancel: () => void;
  onSave: (event: Event) => void;
  onDelete: (eventId: string) => void;
};

export type Event = {
  id: string;
  name: string;
  time: string;
  invitees: string[];
  date: string;
};

function EventForm({ date, event, isOpen, onCancel, onSave, onDelete }: EventFormProps) {
  const [name, setName] = useState(event ? event?.name : "");
  const [time, setTime] = useState(event ? event?.time : "");
  const [invitees, setInvitees] = useState(event ? event?.invitees?.join(", ") : "");

  const isDisabled = !name.trim() || !time.trim() || !invitees.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isDisabled) {
      handleSave();
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleSave = () => {
    const newEvent: Event = {
      id: event ? event?.id : new Date().getTime().toString(),
      name,
      time,
      invitees: invitees?.split(",").map((email) => email?.trim()),
      date,
    };
    onSave(newEvent);
  };

  const handleDelete = () => {
    if (event && event?.id) {
      const confirmDelete = window.confirm("Are you sure you want to delete this event?");
      if (confirmDelete) {
        onDelete(event?.id);
        onCancel();
      }
    }
  };

  return (
    <Container isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onCancel}>X</CloseButton>
        <Title>{event ? "Edit Event" : "Add New Event"}</Title>
        <Form onSubmit={handleSubmit}>
          <Item>
            <Label>Name</Label>
            <Input type="text" value={name} onChange={(e) => setName(e?.target?.value)} />
          </Item>
          <Item>
            <Label>Date</Label>
            <Input type="date" value={date} disabled />
          </Item>
          <Item>
            <Label>Time</Label>
            <Input type="time" value={time} onChange={(e) => setTime(e?.target?.value)} />
          </Item>
          <Item>
            <Label>
              Invitees <Span>(email, separated by comma)</Span>
            </Label>
            <Input type="text" value={invitees} onChange={(e) => setInvitees(e?.target?.value)} />
          </Item>
          <ButtonWrapper>
            <Button variant={ButtonVariant.PRIMARY} disabled={isDisabled} size="m" type="submit">
              {event ? "Update" : "Save"}
            </Button>
            {event && (
              <Button variant={ButtonVariant.DANGER} size="m" type="button" onClick={handleDelete}>
                Delete
              </Button>
            )}
            <Button variant={ButtonVariant.SECONDARY} size="m" type="button" onClick={onCancel}>
              Cancel
            </Button>
          </ButtonWrapper>
        </Form>
      </ModalContent>
    </Container>
  );
}

export default EventForm;
